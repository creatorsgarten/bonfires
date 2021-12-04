import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class WorkspaceScalarWhereInput {

    @Field(() => [WorkspaceScalarWhereInput], {nullable:true})
    AND?: Array<WorkspaceScalarWhereInput>;

    @Field(() => [WorkspaceScalarWhereInput], {nullable:true})
    OR?: Array<WorkspaceScalarWhereInput>;

    @Field(() => [WorkspaceScalarWhereInput], {nullable:true})
    NOT?: Array<WorkspaceScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;
}
