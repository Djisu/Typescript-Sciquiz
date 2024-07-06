import mongoose from 'mongoose';
declare const Profile: mongoose.Model<{
    school: string;
    name?: string | undefined;
    email?: string | undefined;
    user?: mongoose.Types.ObjectId | undefined;
    status?: string | undefined;
    bio?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    school: string;
    name?: string | undefined;
    email?: string | undefined;
    user?: mongoose.Types.ObjectId | undefined;
    status?: string | undefined;
    bio?: string | undefined;
}> & {
    school: string;
    name?: string | undefined;
    email?: string | undefined;
    user?: mongoose.Types.ObjectId | undefined;
    status?: string | undefined;
    bio?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    school: string;
    name?: string | undefined;
    email?: string | undefined;
    user?: mongoose.Types.ObjectId | undefined;
    status?: string | undefined;
    bio?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    school: string;
    name?: string | undefined;
    email?: string | undefined;
    user?: mongoose.Types.ObjectId | undefined;
    status?: string | undefined;
    bio?: string | undefined;
}>> & mongoose.FlatRecord<{
    school: string;
    name?: string | undefined;
    email?: string | undefined;
    user?: mongoose.Types.ObjectId | undefined;
    status?: string | undefined;
    bio?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Profile;
