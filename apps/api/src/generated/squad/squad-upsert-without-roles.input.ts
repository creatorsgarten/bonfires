import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SquadUpdateWithoutRolesInput } from './squad-update-without-roles.input';
import { SquadCreateWithoutRolesInput } from './squad-create-without-roles.input';

@InputType()
export class SquadUpsertWithoutRolesInput {

    @Field(() => SquadUpdateWithoutRolesInput, {nullable:false})
    update!: SquadUpdateWithoutRolesInput;

    @Field(() => SquadCreateWithoutRolesInput, {nullable:false})
    create!: SquadCreateWithoutRolesInput;
}
