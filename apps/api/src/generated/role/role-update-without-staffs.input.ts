import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleType } from '../prisma/role-type.enum';
import { SquadUpdateOneRequiredWithoutRolesInput } from '../squad/squad-update-one-required-without-roles.input';

@InputType()
export class RoleUpdateWithoutStaffsInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => RoleType, {nullable:true})
    type?: keyof typeof RoleType;

    @Field(() => SquadUpdateOneRequiredWithoutRolesInput, {nullable:true})
    squad?: SquadUpdateOneRequiredWithoutRolesInput;
}
