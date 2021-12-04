import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Workspace } from '../workspace/workspace.model';
import { Staff } from '../staff/staff.model';
import { Profile } from '../profile/profile.model';
import { Int } from '@nestjs/graphql';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    displayName!: string;

    @Field(() => String, {nullable:true})
    photo!: string | null;

    @Field(() => [Workspace], {nullable:true})
    workspaces?: Array<Workspace>;

    @Field(() => [Staff], {nullable:true})
    staffs?: Array<Staff>;

    @Field(() => Profile, {nullable:true})
    profile?: Profile | null;

    @Field(() => Int, {nullable:true})
    profileId!: number | null;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
