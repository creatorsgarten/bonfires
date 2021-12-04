import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RoleType } from '../prisma/role-type.enum';

@InputType()
export class RoleUncheckedUpdateWithoutStaffsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => RoleType, {nullable:true})
    type?: keyof typeof RoleType;

    @Field(() => Int, {nullable:true})
    squadId?: number;
}
