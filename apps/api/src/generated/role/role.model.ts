import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RoleType } from '../prisma/role-type.enum';
import { Staff } from '../staff/staff.model';
import { Squad } from '../squad/squad.model';
import { Int } from '@nestjs/graphql';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => RoleType, {nullable:false})
    type!: keyof typeof RoleType;

    @Field(() => [Staff], {nullable:true})
    staffs?: Array<Staff>;

    @Field(() => Squad, {nullable:false})
    squad?: Squad;

    @Field(() => Int, {nullable:false})
    squadId!: number;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
