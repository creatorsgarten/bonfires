import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayCreateWithoutEventInput } from './day-create-without-event.input';
import { DayCreateOrConnectWithoutEventInput } from './day-create-or-connect-without-event.input';
import { DayCreateManyEventInputEnvelope } from './day-create-many-event-input-envelope.input';
import { DayWhereUniqueInput } from './day-where-unique.input';

@InputType()
export class DayUncheckedCreateNestedManyWithoutEventInput {

    @Field(() => [DayCreateWithoutEventInput], {nullable:true})
    create?: Array<DayCreateWithoutEventInput>;

    @Field(() => [DayCreateOrConnectWithoutEventInput], {nullable:true})
    connectOrCreate?: Array<DayCreateOrConnectWithoutEventInput>;

    @Field(() => DayCreateManyEventInputEnvelope, {nullable:true})
    createMany?: DayCreateManyEventInputEnvelope;

    @Field(() => [DayWhereUniqueInput], {nullable:true})
    connect?: Array<DayWhereUniqueInput>;
}
