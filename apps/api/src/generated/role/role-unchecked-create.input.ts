import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RoleType } from '../prisma/role-type.enum';

@InputType()
export class RoleUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => RoleType, {nullable:false})
    type!: keyof typeof RoleType;

    @Field(() => Int, {nullable:false})
    squadId!: number;
}
