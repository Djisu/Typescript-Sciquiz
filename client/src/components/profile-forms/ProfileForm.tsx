import React, { useState, useEffect } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { createProfile, updateProfile, getCurrentProfile } from '../../actions/profile.ts';
//import { RootState } from '../../reducers';
import { ThunkDispatch } from 'redux-thunk';

interface ProfileFormData {
  user?: string;
  school: string;
  status: string;
  bio: string;
  name: string;
  email: string;
  transDate?: Date;
}

interface ProfileState {
  profile: ProfileFormData | null;
  loading: boolean;
  error?: any;
}

interface RootState {
  profile: ProfileState;
}
interface ProfileFormProps {
  profile: ProfileState;
  createProfile: (formData: ProfileFormData, edit?: boolean) => Promise<void>;
  getCurrentProfile: () => void;
}


const initialState: ProfileFormData = {
  school: '',
  status: '',
  bio: '',
  name: '',
  email: '',
  transDate: new Date(0),
};

const ProfileForm: React.FC<ProfileFormProps> = ({ profile: { profile, loading }, createProfile, getCurrentProfile }) => {  
  const [formData, setFormData] = useState<ProfileFormData>(initialState);

  const creatingProfile = useMatch('/create-profile');

  const navigate = useNavigate();

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  const userEmail = localStorage.getItem('email');

  useEffect(() => {
    if (!profile) {
      dispatch(getCurrentProfile());
    }

    if (!loading && profile) {
      const profileData: ProfileFormData = { ...initialState };

      (Object.keys(profile) as (keyof ProfileFormData)[]).forEach((key) => {
        const value = profile[key];

        if (value !== undefined) {
          (profileData as any)[key] = profile[key as keyof ProfileFormData];
        }
      });

      setFormData(profileData);
    }
  }, [loading, profile, dispatch]);

  const { status, school, bio, name, email, transDate} = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    formData.transDate = new Date();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (userEmail !== null){
      formData.email = userEmail;
    }
    
    const editing = !!profile;

    e.preventDefault();

    if (editing) {
      dispatch(updateProfile(formData, editing));
    } else {
      dispatch(createProfile(formData, editing))
        .then(() => navigate('/dashboard'))
        .catch((error) => console.error('Error creating profile:', error));
    }
  };

  return (
    <section className="container">
      <h1 className="large text-primary">
        {creatingProfile ? 'Create Your Profile' : 'Edit Your Profile'}
      </h1>

      <p className="lead">
        <i className="fas fa-user" />
        {creatingProfile
          ? ` Let's get some information to make your profile`
          : ' Add some changes to your profile'}
      </p>

      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="School"
            name="school"
            value={school}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <select name="status" value={status} onChange={onChange}>
            <option>* Select Your Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <small className="form-text">Tell us a little bit about yourself</small>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <Link to="/dashboard" className="primary m-3">
            Go Back
          </Link>
          <br />
          <button className="primary my-1" type="submit">
            {creatingProfile ? ` Create Profile` : 'Edit Profile'}
          </button>
        </div>
      </form>
    </section>
  );
};

const mapStateToProps = (state: RootState): { profile: ProfileState } => ({
  profile: state.profile,
});


export default connect(mapStateToProps, { createProfile, getCurrentProfile })(ProfileForm);

