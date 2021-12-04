import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutSquadInput } from './role-create-without-squad.input';
import { RoleCreateOrConnectWithoutSquadInput } from './role-create-or-connect-without-squad.input';
import { RoleUpsertWithWhereUniqueWithoutSquadInput } from './role-upsert-with-where-unique-without-squad.input';
import { RoleCreateManySquadInputEnvelope } from './role-create-many-squad-input-envelope.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithWhereUniqueWithoutSquadInput } from './role-update-with-where-unique-without-squad.input';
import { RoleUpdateManyWithWhereWithoutSquadInput } from './role-update-many-with-where-without-squad.input';
import { RoleScalarWhereInput } from './role-scalar-where.input';

@InputType()
export class RoleUpdateManyWithoutSquadInput {

    @Field(() => [RoleCreateWithoutSquadInput], {nullable:true})
    create?: Array<RoleCreateWithoutSquadInput>;

    @Field(() => [RoleCreateOrConnectWithoutSquadInput], {nullable:true})
    connectOrCreate?: Array<RoleCreateOrConnectWithoutSquadInput>;

    @Field(() => [RoleUpsertWithWhereUniqueWithoutSquadInput], {nullable:true})
    upsert?: Array<RoleUpsertWithWhereUniqueWithoutSquadInput>;

    @Field(() => RoleCreateManySquadInputEnvelope, {nullable:true})
    createMany?: RoleCreateManySquadInputEnvelope;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    set?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    disconnect?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    delete?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    connect?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleUpdateWithWhereUniqueWithoutSquadInput], {nullable:true})
    update?: Array<RoleUpdateWithWhereUniqueWithoutSquadInput>;

    @Field(() => [RoleUpdateManyWithWhereWithoutSquadInput], {nullable:true})
    updateMany?: Array<RoleUpdateManyWithWhereWithoutSquadInput>;

    @Field(() => [RoleScalarWhereInput], {nullable:true})
    deleteMany?: Array<RoleScalarWhereInput>;
}
