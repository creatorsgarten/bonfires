import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SquadCreateWithoutRolesInput } from './squad-create-without-roles.input';
import { SquadCreateOrConnectWithoutRolesInput } from './squad-create-or-connect-without-roles.input';
import { SquadWhereUniqueInput } from './squad-where-unique.input';

@InputType()
export class SquadCreateNestedOneWithoutRolesInput {

    @Field(() => SquadCreateWithoutRolesInput, {nullable:true})
    create?: SquadCreateWithoutRolesInput;

    @Field(() => SquadCreateOrConnectWithoutRolesInput, {nullable:true})
    connectOrCreate?: SquadCreateOrConnectWithoutRolesInput;

    @Field(() => SquadWhereUniqueInput, {nullable:true})
    connect?: SquadWhereUniqueInput;
}
