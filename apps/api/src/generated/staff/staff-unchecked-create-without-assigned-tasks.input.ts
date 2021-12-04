import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskUncheckedCreateNestedManyWithoutManagerInput } from '../task/task-unchecked-create-nested-many-without-manager.input';

@InputType()
export class StaffUncheckedCreateWithoutAssignedTasksInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Int, {nullable:true})
    directorDayId?: number;

    @Field(() => TaskUncheckedCreateNestedManyWithoutManagerInput, {nullable:true})
    managedTasks?: TaskUncheckedCreateNestedManyWithoutManagerInput;
}
