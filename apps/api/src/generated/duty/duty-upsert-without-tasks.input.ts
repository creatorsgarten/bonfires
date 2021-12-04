import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyUpdateWithoutTasksInput } from './duty-update-without-tasks.input';
import { DutyCreateWithoutTasksInput } from './duty-create-without-tasks.input';

@InputType()
export class DutyUpsertWithoutTasksInput {

    @Field(() => DutyUpdateWithoutTasksInput, {nullable:false})
    update!: DutyUpdateWithoutTasksInput;

    @Field(() => DutyCreateWithoutTasksInput, {nullable:false})
    create!: DutyCreateWithoutTasksInput;
}
