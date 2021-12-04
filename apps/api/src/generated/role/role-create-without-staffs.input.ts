import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleType } from '../prisma/role-type.enum';
import { SquadCreateNestedOneWithoutRolesInput } from '../squad/squad-create-nested-one-without-roles.input';

@InputType()
export class RoleCreateWithoutStaffsInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => RoleType, {nullable:false})
    type!: keyof typeof RoleType;

    @Field(() => SquadCreateNestedOneWithoutRolesInput, {nullable:false})
    squad!: SquadCreateNestedOneWithoutRolesInput;
}
