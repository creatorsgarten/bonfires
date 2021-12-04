import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SquadWhereUniqueInput } from './squad-where-unique.input';
import { SquadCreateWithoutRolesInput } from './squad-create-without-roles.input';

@InputType()
export class SquadCreateOrConnectWithoutRolesInput {

    @Field(() => SquadWhereUniqueInput, {nullable:false})
    where!: SquadWhereUniqueInput;

    @Field(() => SquadCreateWithoutRolesInput, {nullable:false})
    create!: SquadCreateWithoutRolesInput;
}
