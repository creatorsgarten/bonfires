import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskUpdateManyMutationInput } from './task-update-many-mutation.input';
import { TaskWhereInput } from './task-where.input';

@ArgsType()
export class UpdateManyTaskArgs {

    @Field(() => TaskUpdateManyMutationInput, {nullable:false})
    data!: TaskUpdateManyMutationInput;

    @Field(() => TaskWhereInput, {nullable:true})
    where?: TaskWhereInput;
}
