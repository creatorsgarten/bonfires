import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyCreateWithoutDayInput } from './duty-create-without-day.input';
import { DutyCreateOrConnectWithoutDayInput } from './duty-create-or-connect-without-day.input';
import { DutyUpsertWithWhereUniqueWithoutDayInput } from './duty-upsert-with-where-unique-without-day.input';
import { DutyCreateManyDayInputEnvelope } from './duty-create-many-day-input-envelope.input';
import { DutyWhereUniqueInput } from './duty-where-unique.input';
import { DutyUpdateWithWhereUniqueWithoutDayInput } from './duty-update-with-where-unique-without-day.input';
import { DutyUpdateManyWithWhereWithoutDayInput } from './duty-update-many-with-where-without-day.input';
import { DutyScalarWhereInput } from './duty-scalar-where.input';

@InputType()
export class DutyUncheckedUpdateManyWithoutDayInput {

    @Field(() => [DutyCreateWithoutDayInput], {nullable:true})
    create?: Array<DutyCreateWithoutDayInput>;

    @Field(() => [DutyCreateOrConnectWithoutDayInput], {nullable:true})
    connectOrCreate?: Array<DutyCreateOrConnectWithoutDayInput>;

    @Field(() => [DutyUpsertWithWhereUniqueWithoutDayInput], {nullable:true})
    upsert?: Array<DutyUpsertWithWhereUniqueWithoutDayInput>;

    @Field(() => DutyCreateManyDayInputEnvelope, {nullable:true})
    createMany?: DutyCreateManyDayInputEnvelope;

    @Field(() => [DutyWhereUniqueInput], {nullable:true})
    set?: Array<DutyWhereUniqueInput>;

    @Field(() => [DutyWhereUniqueInput], {nullable:true})
    disconnect?: Array<DutyWhereUniqueInput>;

    @Field(() => [DutyWhereUniqueInput], {nullable:true})
    delete?: Array<DutyWhereUniqueInput>;

    @Field(() => [DutyWhereUniqueInput], {nullable:true})
    connect?: Array<DutyWhereUniqueInput>;

    @Field(() => [DutyUpdateWithWhereUniqueWithoutDayInput], {nullable:true})
    update?: Array<DutyUpdateWithWhereUniqueWithoutDayInput>;

    @Field(() => [DutyUpdateManyWithWhereWithoutDayInput], {nullable:true})
    updateMany?: Array<DutyUpdateManyWithWhereWithoutDayInput>;

    @Field(() => [DutyScalarWhereInput], {nullable:true})
    deleteMany?: Array<DutyScalarWhereInput>;
}
