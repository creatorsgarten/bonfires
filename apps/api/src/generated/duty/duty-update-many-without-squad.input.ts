import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyCreateWithoutSquadInput } from './duty-create-without-squad.input';
import { DutyCreateOrConnectWithoutSquadInput } from './duty-create-or-connect-without-squad.input';
import { DutyUpsertWithWhereUniqueWithoutSquadInput } from './duty-upsert-with-where-unique-without-squad.input';
import { DutyCreateManySquadInputEnvelope } from './duty-create-many-squad-input-envelope.input';
import { DutyWhereUniqueInput } from './duty-where-unique.input';
import { DutyUpdateWithWhereUniqueWithoutSquadInput } from './duty-update-with-where-unique-without-squad.input';
import { DutyUpdateManyWithWhereWithoutSquadInput } from './duty-update-many-with-where-without-squad.input';
import { DutyScalarWhereInput } from './duty-scalar-where.input';

@InputType()
export class DutyUpdateManyWithoutSquadInput {

    @Field(() => [DutyCreateWithoutSquadInput], {nullable:true})
    create?: Array<DutyCreateWithoutSquadInput>;

    @Field(() => [DutyCreateOrConnectWithoutSquadInput], {nullable:true})
    connectOrCreate?: Array<DutyCreateOrConnectWithoutSquadInput>;

    @Field(() => [DutyUpsertWithWhereUniqueWithoutSquadInput], {nullable:true})
    upsert?: Array<DutyUpsertWithWhereUniqueWithoutSquadInput>;

    @Field(() => DutyCreateManySquadInputEnvelope, {nullable:true})
    createMany?: DutyCreateManySquadInputEnvelope;

    @Field(() => [DutyWhereUniqueInput], {nullable:true})
    set?: Array<DutyWhereUniqueInput>;

    @Field(() => [DutyWhereUniqueInput], {nullable:true})
    disconnect?: Array<DutyWhereUniqueInput>;

    @Field(() => [DutyWhereUniqueInput], {nullable:true})
    delete?: Array<DutyWhereUniqueInput>;

    @Field(() => [DutyWhereUniqueInput], {nullable:true})
    connect?: Array<DutyWhereUniqueInput>;

    @Field(() => [DutyUpdateWithWhereUniqueWithoutSquadInput], {nullable:true})
    update?: Array<DutyUpdateWithWhereUniqueWithoutSquadInput>;

    @Field(() => [DutyUpdateManyWithWhereWithoutSquadInput], {nullable:true})
    updateMany?: Array<DutyUpdateManyWithWhereWithoutSquadInput>;

    @Field(() => [DutyScalarWhereInput], {nullable:true})
    deleteMany?: Array<DutyScalarWhereInput>;
}
