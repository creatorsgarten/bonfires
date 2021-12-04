import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffUpdateOneRequiredWithoutAssignedTasksInput } from '../staff/staff-update-one-required-without-assigned-tasks.input';

@InputType()
export class TaskAssigneesUpdateWithoutTaskInput {

    @Field(() => StaffUpdateOneRequiredWithoutAssignedTasksInput, {nullable:true})
    staff?: StaffUpdateOneRequiredWithoutAssignedTasksInput;
}
