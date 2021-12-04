import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgendaCreateWithoutDayInput } from './agenda-create-without-day.input';
import { AgendaCreateOrConnectWithoutDayInput } from './agenda-create-or-connect-without-day.input';
import { AgendaUpsertWithWhereUniqueWithoutDayInput } from './agenda-upsert-with-where-unique-without-day.input';
import { AgendaCreateManyDayInputEnvelope } from './agenda-create-many-day-input-envelope.input';
import { AgendaWhereUniqueInput } from './agenda-where-unique.input';
import { AgendaUpdateWithWhereUniqueWithoutDayInput } from './agenda-update-with-where-unique-without-day.input';
import { AgendaUpdateManyWithWhereWithoutDayInput } from './agenda-update-many-with-where-without-day.input';
import { AgendaScalarWhereInput } from './agenda-scalar-where.input';

@InputType()
export class AgendaUncheckedUpdateManyWithoutDayInput {

    @Field(() => [AgendaCreateWithoutDayInput], {nullable:true})
    create?: Array<AgendaCreateWithoutDayInput>;

    @Field(() => [AgendaCreateOrConnectWithoutDayInput], {nullable:true})
    connectOrCreate?: Array<AgendaCreateOrConnectWithoutDayInput>;

    @Field(() => [AgendaUpsertWithWhereUniqueWithoutDayInput], {nullable:true})
    upsert?: Array<AgendaUpsertWithWhereUniqueWithoutDayInput>;

    @Field(() => AgendaCreateManyDayInputEnvelope, {nullable:true})
    createMany?: AgendaCreateManyDayInputEnvelope;

    @Field(() => [AgendaWhereUniqueInput], {nullable:true})
    set?: Array<AgendaWhereUniqueInput>;

    @Field(() => [AgendaWhereUniqueInput], {nullable:true})
    disconnect?: Array<AgendaWhereUniqueInput>;

    @Field(() => [AgendaWhereUniqueInput], {nullable:true})
    delete?: Array<AgendaWhereUniqueInput>;

    @Field(() => [AgendaWhereUniqueInput], {nullable:true})
    connect?: Array<AgendaWhereUniqueInput>;

    @Field(() => [AgendaUpdateWithWhereUniqueWithoutDayInput], {nullable:true})
    update?: Array<AgendaUpdateWithWhereUniqueWithoutDayInput>;

    @Field(() => [AgendaUpdateManyWithWhereWithoutDayInput], {nullable:true})
    updateMany?: Array<AgendaUpdateManyWithWhereWithoutDayInput>;

    @Field(() => [AgendaScalarWhereInput], {nullable:true})
    deleteMany?: Array<AgendaScalarWhereInput>;
}
