import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DutyUncheckedUpdateManyWithoutSquadInput } from '../duty/duty-unchecked-update-many-without-squad.input';
import { TaskUncheckedUpdateManyWithoutSquadInput } from '../task/task-unchecked-update-many-without-squad.input';

@InputType()
export class SquadUncheckedUpdateWithoutRolesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => DutyUncheckedUpdateManyWithoutSquadInput, {nullable:true})
    duties?: DutyUncheckedUpdateManyWithoutSquadInput;

    @Field(() => TaskUncheckedUpdateManyWithoutSquadInput, {nullable:true})
    tasks?: TaskUncheckedUpdateManyWithoutSquadInput;
}
