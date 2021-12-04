import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUpdateOneRequiredWithoutAssigneesInput } from '../task/task-update-one-required-without-assignees.input';
import { StaffUpdateOneRequiredWithoutAssignedTasksInput } from '../staff/staff-update-one-required-without-assigned-tasks.input';

@InputType()
export class TaskAssigneesUpdateInput {

    @Field(() => TaskUpdateOneRequiredWithoutAssigneesInput, {nullable:true})
    task?: TaskUpdateOneRequiredWithoutAssigneesInput;

    @Field(() => StaffUpdateOneRequiredWithoutAssignedTasksInput, {nullable:true})
    staff?: StaffUpdateOneRequiredWithoutAssignedTasksInput;
}
