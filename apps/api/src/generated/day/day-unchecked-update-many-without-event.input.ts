import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayCreateWithoutEventInput } from './day-create-without-event.input';
import { DayCreateOrConnectWithoutEventInput } from './day-create-or-connect-without-event.input';
import { DayUpsertWithWhereUniqueWithoutEventInput } from './day-upsert-with-where-unique-without-event.input';
import { DayCreateManyEventInputEnvelope } from './day-create-many-event-input-envelope.input';
import { DayWhereUniqueInput } from './day-where-unique.input';
import { DayUpdateWithWhereUniqueWithoutEventInput } from './day-update-with-where-unique-without-event.input';
import { DayUpdateManyWithWhereWithoutEventInput } from './day-update-many-with-where-without-event.input';
import { DayScalarWhereInput } from './day-scalar-where.input';

@InputType()
export class DayUncheckedUpdateManyWithoutEventInput {

    @Field(() => [DayCreateWithoutEventInput], {nullable:true})
    create?: Array<DayCreateWithoutEventInput>;

    @Field(() => [DayCreateOrConnectWithoutEventInput], {nullable:true})
    connectOrCreate?: Array<DayCreateOrConnectWithoutEventInput>;

    @Field(() => [DayUpsertWithWhereUniqueWithoutEventInput], {nullable:true})
    upsert?: Array<DayUpsertWithWhereUniqueWithoutEventInput>;

    @Field(() => DayCreateManyEventInputEnvelope, {nullable:true})
    createMany?: DayCreateManyEventInputEnvelope;

    @Field(() => [DayWhereUniqueInput], {nullable:true})
    set?: Array<DayWhereUniqueInput>;

    @Field(() => [DayWhereUniqueInput], {nullable:true})
    disconnect?: Array<DayWhereUniqueInput>;

    @Field(() => [DayWhereUniqueInput], {nullable:true})
    delete?: Array<DayWhereUniqueInput>;

    @Field(() => [DayWhereUniqueInput], {nullable:true})
    connect?: Array<DayWhereUniqueInput>;

    @Field(() => [DayUpdateWithWhereUniqueWithoutEventInput], {nullable:true})
    update?: Array<DayUpdateWithWhereUniqueWithoutEventInput>;

    @Field(() => [DayUpdateManyWithWhereWithoutEventInput], {nullable:true})
    updateMany?: Array<DayUpdateManyWithWhereWithoutEventInput>;

    @Field(() => [DayScalarWhereInput], {nullable:true})
    deleteMany?: Array<DayScalarWhereInput>;
}
