import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedManyWithoutSquadInput } from '../role/role-create-nested-many-without-squad.input';
import { DutyCreateNestedManyWithoutSquadInput } from '../duty/duty-create-nested-many-without-squad.input';

@InputType()
export class SquadCreateWithoutTasksInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => RoleCreateNestedManyWithoutSquadInput, {nullable:true})
    roles?: RoleCreateNestedManyWithoutSquadInput;

    @Field(() => DutyCreateNestedManyWithoutSquadInput, {nullable:true})
    duties?: DutyCreateNestedManyWithoutSquadInput;
}
