import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgendaCreateWithoutDayInput } from './agenda-create-without-day.input';
import { AgendaCreateOrConnectWithoutDayInput } from './agenda-create-or-connect-without-day.input';
import { AgendaCreateManyDayInputEnvelope } from './agenda-create-many-day-input-envelope.input';
import { AgendaWhereUniqueInput } from './agenda-where-unique.input';

@InputType()
export class AgendaUncheckedCreateNestedManyWithoutDayInput {

    @Field(() => [AgendaCreateWithoutDayInput], {nullable:true})
    create?: Array<AgendaCreateWithoutDayInput>;

    @Field(() => [AgendaCreateOrConnectWithoutDayInput], {nullable:true})
    connectOrCreate?: Array<AgendaCreateOrConnectWithoutDayInput>;

    @Field(() => AgendaCreateManyDayInputEnvelope, {nullable:true})
    createMany?: AgendaCreateManyDayInputEnvelope;

    @Field(() => [AgendaWhereUniqueInput], {nullable:true})
    connect?: Array<AgendaWhereUniqueInput>;
}
