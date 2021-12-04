import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RoleUncheckedUpdateManyWithoutSquadInput } from '../role/role-unchecked-update-many-without-squad.input';
import { DutyUncheckedUpdateManyWithoutSquadInput } from '../duty/duty-unchecked-update-many-without-squad.input';

@InputType()
export class SquadUncheckedUpdateWithoutTasksInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => RoleUncheckedUpdateManyWithoutSquadInput, {nullable:true})
    roles?: RoleUncheckedUpdateManyWithoutSquadInput;

    @Field(() => DutyUncheckedUpdateManyWithoutSquadInput, {nullable:true})
    duties?: DutyUncheckedUpdateManyWithoutSquadInput;
}
