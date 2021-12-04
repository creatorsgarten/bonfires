import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyCreateWithoutTasksInput } from './duty-create-without-tasks.input';
import { DutyCreateOrConnectWithoutTasksInput } from './duty-create-or-connect-without-tasks.input';
import { DutyUpsertWithoutTasksInput } from './duty-upsert-without-tasks.input';
import { DutyWhereUniqueInput } from './duty-where-unique.input';
import { DutyUpdateWithoutTasksInput } from './duty-update-without-tasks.input';

@InputType()
export class DutyUpdateOneWithoutTasksInput {

    @Field(() => DutyCreateWithoutTasksInput, {nullable:true})
    create?: DutyCreateWithoutTasksInput;

    @Field(() => DutyCreateOrConnectWithoutTasksInput, {nullable:true})
    connectOrCreate?: DutyCreateOrConnectWithoutTasksInput;

    @Field(() => DutyUpsertWithoutTasksInput, {nullable:true})
    upsert?: DutyUpsertWithoutTasksInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => DutyWhereUniqueInput, {nullable:true})
    connect?: DutyWhereUniqueInput;

    @Field(() => DutyUpdateWithoutTasksInput, {nullable:true})
    update?: DutyUpdateWithoutTasksInput;
}
