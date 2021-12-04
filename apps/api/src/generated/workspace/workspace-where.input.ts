import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EventListRelationFilter } from '../event/event-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class WorkspaceWhereInput {

    @Field(() => [WorkspaceWhereInput], {nullable:true})
    AND?: Array<WorkspaceWhereInput>;

    @Field(() => [WorkspaceWhereInput], {nullable:true})
    OR?: Array<WorkspaceWhereInput>;

    @Field(() => [WorkspaceWhereInput], {nullable:true})
    NOT?: Array<WorkspaceWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => EventListRelationFilter, {nullable:true})
    events?: EventListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;
}
