import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class TaskAssigneesScalarWhereInput {

    @Field(() => [TaskAssigneesScalarWhereInput], {nullable:true})
    AND?: Array<TaskAssigneesScalarWhereInput>;

    @Field(() => [TaskAssigneesScalarWhereInput], {nullable:true})
    OR?: Array<TaskAssigneesScalarWhereInput>;

    @Field(() => [TaskAssigneesScalarWhereInput], {nullable:true})
    NOT?: Array<TaskAssigneesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    taskId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    staffId?: IntFilter;
}
