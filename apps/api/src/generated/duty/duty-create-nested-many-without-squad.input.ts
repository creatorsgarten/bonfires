import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyCreateWithoutSquadInput } from './duty-create-without-squad.input';
import { DutyCreateOrConnectWithoutSquadInput } from './duty-create-or-connect-without-squad.input';
import { DutyCreateManySquadInputEnvelope } from './duty-create-many-squad-input-envelope.input';
import { DutyWhereUniqueInput } from './duty-where-unique.input';

@InputType()
export class DutyCreateNestedManyWithoutSquadInput {

    @Field(() => [DutyCreateWithoutSquadInput], {nullable:true})
    create?: Array<DutyCreateWithoutSquadInput>;

    @Field(() => [DutyCreateOrConnectWithoutSquadInput], {nullable:true})
    connectOrCreate?: Array<DutyCreateOrConnectWithoutSquadInput>;

    @Field(() => DutyCreateManySquadInputEnvelope, {nullable:true})
    createMany?: DutyCreateManySquadInputEnvelope;

    @Field(() => [DutyWhereUniqueInput], {nullable:true})
    connect?: Array<DutyWhereUniqueInput>;
}
