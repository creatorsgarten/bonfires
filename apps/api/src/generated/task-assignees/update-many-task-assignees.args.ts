import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskAssigneesUncheckedUpdateManyInput } from './task-assignees-unchecked-update-many.input';
import { TaskAssigneesWhereInput } from './task-assignees-where.input';

@ArgsType()
export class UpdateManyTaskAssigneesArgs {

    @Field(() => TaskAssigneesUncheckedUpdateManyInput, {nullable:false})
    data!: TaskAssigneesUncheckedUpdateManyInput;

    @Field(() => TaskAssigneesWhereInput, {nullable:true})
    where?: TaskAssigneesWhereInput;
}
