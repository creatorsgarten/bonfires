import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyWhereUniqueInput } from './duty-where-unique.input';
import { DutyUpdateWithoutSquadInput } from './duty-update-without-squad.input';

@InputType()
export class DutyUpdateWithWhereUniqueWithoutSquadInput {

    @Field(() => DutyWhereUniqueInput, {nullable:false})
    where!: DutyWhereUniqueInput;

    @Field(() => DutyUpdateWithoutSquadInput, {nullable:false})
    data!: DutyUpdateWithoutSquadInput;
}
