import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutSquadInput } from './role-create-without-squad.input';
import { RoleCreateOrConnectWithoutSquadInput } from './role-create-or-connect-without-squad.input';
import { RoleCreateManySquadInputEnvelope } from './role-create-many-squad-input-envelope.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedManyWithoutSquadInput {

    @Field(() => [RoleCreateWithoutSquadInput], {nullable:true})
    create?: Array<RoleCreateWithoutSquadInput>;

    @Field(() => [RoleCreateOrConnectWithoutSquadInput], {nullable:true})
    connectOrCreate?: Array<RoleCreateOrConnectWithoutSquadInput>;

    @Field(() => RoleCreateManySquadInputEnvelope, {nullable:true})
    createMany?: RoleCreateManySquadInputEnvelope;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    connect?: Array<RoleWhereUniqueInput>;
}
