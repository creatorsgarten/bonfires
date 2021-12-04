import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RoleUncheckedCreateNestedManyWithoutSquadInput } from '../role/role-unchecked-create-nested-many-without-squad.input';
import { DutyUncheckedCreateNestedManyWithoutSquadInput } from '../duty/duty-unchecked-create-nested-many-without-squad.input';

@InputType()
export class SquadUncheckedCreateWithoutTasksInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => RoleUncheckedCreateNestedManyWithoutSquadInput, {nullable:true})
    roles?: RoleUncheckedCreateNestedManyWithoutSquadInput;

    @Field(() => DutyUncheckedCreateNestedManyWithoutSquadInput, {nullable:true})
    duties?: DutyUncheckedCreateNestedManyWithoutSquadInput;
}
