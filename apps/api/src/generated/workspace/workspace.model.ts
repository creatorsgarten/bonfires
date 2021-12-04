import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Event } from '../event/event.model';
import { User } from '../user/user.model';
import { WorkspaceCount } from './workspace-count.output';

@ObjectType()
export class Workspace {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => [Event], {nullable:true})
    events?: Array<Event>;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => WorkspaceCount, {nullable:false})
    _count?: WorkspaceCount;
}
