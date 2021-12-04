import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUpdateOneRequiredWithoutAssigneesInput } from '../task/task-update-one-required-without-assignees.input';

@InputType()
export class TaskAssigneesUpdateWithoutStaffInput {

    @Field(() => TaskUpdateOneRequiredWithoutAssigneesInput, {nullable:true})
    task?: TaskUpdateOneRequiredWithoutAssigneesInput;
}
