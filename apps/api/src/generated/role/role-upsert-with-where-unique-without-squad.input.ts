import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutSquadInput } from './role-update-without-squad.input';
import { RoleCreateWithoutSquadInput } from './role-create-without-squad.input';

@InputType()
export class RoleUpsertWithWhereUniqueWithoutSquadInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutSquadInput, {nullable:false})
    update!: RoleUpdateWithoutSquadInput;

    @Field(() => RoleCreateWithoutSquadInput, {nullable:false})
    create!: RoleCreateWithoutSquadInput;
}
