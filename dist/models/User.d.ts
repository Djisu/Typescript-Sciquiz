import mongoose from 'mongoose';
declare const User: mongoose.Model<{
    name: string;
    date: Date;
    email: string;
    password: string;
    isAdmin: boolean;
    avatar?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    date: Date;
    email: string;
    password: string;
    isAdmin: boolean;
    avatar?: string | undefined;
}> & {
    name: string;
    date: Date;
    email: string;
    password: string;
    isAdmin: boolean;
    avatar?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    date: Date;
    email: string;
    password: string;
    isAdmin: boolean;
    avatar?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    date: Date;
    email: string;
    password: string;
    isAdmin: boolean;
    avatar?: string | undefined;
}>> & mongoose.FlatRecord<{
    name: string;
    date: Date;
    email: string;
    password: string;
    isAdmin: boolean;
    avatar?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default User;
