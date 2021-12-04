import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyCreateWithoutTasksInput } from './duty-create-without-tasks.input';
import { DutyCreateOrConnectWithoutTasksInput } from './duty-create-or-connect-without-tasks.input';
import { DutyWhereUniqueInput } from './duty-where-unique.input';

@InputType()
export class DutyCreateNestedOneWithoutTasksInput {

    @Field(() => DutyCreateWithoutTasksInput, {nullable:true})
    create?: DutyCreateWithoutTasksInput;

    @Field(() => DutyCreateOrConnectWithoutTasksInput, {nullable:true})
    connectOrCreate?: DutyCreateOrConnectWithoutTasksInput;

    @Field(() => DutyWhereUniqueInput, {nullable:true})
    connect?: DutyWhereUniqueInput;
}
