import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SquadCreateWithoutRolesInput } from './squad-create-without-roles.input';
import { SquadCreateOrConnectWithoutRolesInput } from './squad-create-or-connect-without-roles.input';
import { SquadUpsertWithoutRolesInput } from './squad-upsert-without-roles.input';
import { SquadWhereUniqueInput } from './squad-where-unique.input';
import { SquadUpdateWithoutRolesInput } from './squad-update-without-roles.input';

@InputType()
export class SquadUpdateOneRequiredWithoutRolesInput {

    @Field(() => SquadCreateWithoutRolesInput, {nullable:true})
    create?: SquadCreateWithoutRolesInput;

    @Field(() => SquadCreateOrConnectWithoutRolesInput, {nullable:true})
    connectOrCreate?: SquadCreateOrConnectWithoutRolesInput;

    @Field(() => SquadUpsertWithoutRolesInput, {nullable:true})
    upsert?: SquadUpsertWithoutRolesInput;

    @Field(() => SquadWhereUniqueInput, {nullable:true})
    connect?: SquadWhereUniqueInput;

    @Field(() => SquadUpdateWithoutRolesInput, {nullable:true})
    update?: SquadUpdateWithoutRolesInput;
}
