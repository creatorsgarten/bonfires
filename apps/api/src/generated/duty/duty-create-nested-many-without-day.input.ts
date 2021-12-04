import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyCreateWithoutDayInput } from './duty-create-without-day.input';
import { DutyCreateOrConnectWithoutDayInput } from './duty-create-or-connect-without-day.input';
import { DutyCreateManyDayInputEnvelope } from './duty-create-many-day-input-envelope.input';
import { DutyWhereUniqueInput } from './duty-where-unique.input';

@InputType()
export class DutyCreateNestedManyWithoutDayInput {

    @Field(() => [DutyCreateWithoutDayInput], {nullable:true})
    create?: Array<DutyCreateWithoutDayInput>;

    @Field(() => [DutyCreateOrConnectWithoutDayInput], {nullable:true})
    connectOrCreate?: Array<DutyCreateOrConnectWithoutDayInput>;

    @Field(() => DutyCreateManyDayInputEnvelope, {nullable:true})
    createMany?: DutyCreateManyDayInputEnvelope;

    @Field(() => [DutyWhereUniqueInput], {nullable:true})
    connect?: Array<DutyWhereUniqueInput>;
}
