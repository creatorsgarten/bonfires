import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateManyWithoutSquadInput } from '../role/role-update-many-without-squad.input';
import { DutyUpdateManyWithoutSquadInput } from '../duty/duty-update-many-without-squad.input';

@InputType()
export class SquadUpdateWithoutTasksInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => RoleUpdateManyWithoutSquadInput, {nullable:true})
    roles?: RoleUpdateManyWithoutSquadInput;

    @Field(() => DutyUpdateManyWithoutSquadInput, {nullable:true})
    duties?: DutyUpdateManyWithoutSquadInput;
}
