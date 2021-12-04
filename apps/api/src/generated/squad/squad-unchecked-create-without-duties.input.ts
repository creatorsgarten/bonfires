import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RoleUncheckedCreateNestedManyWithoutSquadInput } from '../role/role-unchecked-create-nested-many-without-squad.input';
import { TaskUncheckedCreateNestedManyWithoutSquadInput } from '../task/task-unchecked-create-nested-many-without-squad.input';

@InputType()
export class SquadUncheckedCreateWithoutDutiesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => RoleUncheckedCreateNestedManyWithoutSquadInput, {nullable:true})
    roles?: RoleUncheckedCreateNestedManyWithoutSquadInput;

    @Field(() => TaskUncheckedCreateNestedManyWithoutSquadInput, {nullable:true})
    tasks?: TaskUncheckedCreateNestedManyWithoutSquadInput;
}
