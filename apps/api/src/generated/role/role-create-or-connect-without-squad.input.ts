import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleCreateWithoutSquadInput } from './role-create-without-squad.input';

@InputType()
export class RoleCreateOrConnectWithoutSquadInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleCreateWithoutSquadInput, {nullable:false})
    create!: RoleCreateWithoutSquadInput;
}
