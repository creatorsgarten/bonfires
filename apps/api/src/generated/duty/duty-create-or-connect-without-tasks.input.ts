import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyWhereUniqueInput } from './duty-where-unique.input';
import { DutyCreateWithoutTasksInput } from './duty-create-without-tasks.input';

@InputType()
export class DutyCreateOrConnectWithoutTasksInput {

    @Field(() => DutyWhereUniqueInput, {nullable:false})
    where!: DutyWhereUniqueInput;

    @Field(() => DutyCreateWithoutTasksInput, {nullable:false})
    create!: DutyCreateWithoutTasksInput;
}
