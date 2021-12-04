import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutSquadInput } from './role-update-without-squad.input';

@InputType()
export class RoleUpdateWithWhereUniqueWithoutSquadInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutSquadInput, {nullable:false})
    data!: RoleUpdateWithoutSquadInput;
}
