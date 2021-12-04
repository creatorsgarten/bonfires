import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyWhereUniqueInput } from './duty-where-unique.input';
import { DutyCreateWithoutSquadInput } from './duty-create-without-squad.input';

@InputType()
export class DutyCreateOrConnectWithoutSquadInput {

    @Field(() => DutyWhereUniqueInput, {nullable:false})
    where!: DutyWhereUniqueInput;

    @Field(() => DutyCreateWithoutSquadInput, {nullable:false})
    create!: DutyCreateWithoutSquadInput;
}
