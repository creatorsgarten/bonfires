import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyWhereUniqueInput } from './duty-where-unique.input';
import { DutyUpdateWithoutSquadInput } from './duty-update-without-squad.input';
import { DutyCreateWithoutSquadInput } from './duty-create-without-squad.input';

@InputType()
export class DutyUpsertWithWhereUniqueWithoutSquadInput {

    @Field(() => DutyWhereUniqueInput, {nullable:false})
    where!: DutyWhereUniqueInput;

    @Field(() => DutyUpdateWithoutSquadInput, {nullable:false})
    update!: DutyUpdateWithoutSquadInput;

    @Field(() => DutyCreateWithoutSquadInput, {nullable:false})
    create!: DutyCreateWithoutSquadInput;
}
