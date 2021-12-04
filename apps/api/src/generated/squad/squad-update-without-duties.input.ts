import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateManyWithoutSquadInput } from '../role/role-update-many-without-squad.input';
import { TaskUpdateManyWithoutSquadInput } from '../task/task-update-many-without-squad.input';

@InputType()
export class SquadUpdateWithoutDutiesInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => RoleUpdateManyWithoutSquadInput, {nullable:true})
    roles?: RoleUpdateManyWithoutSquadInput;

    @Field(() => TaskUpdateManyWithoutSquadInput, {nullable:true})
    tasks?: TaskUpdateManyWithoutSquadInput;
}
