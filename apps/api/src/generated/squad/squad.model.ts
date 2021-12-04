import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { Duty } from '../duty/duty.model';
import { Task } from '../task/task.model';
import { SquadCount } from './squad-count.output';

@ObjectType()
export class Squad {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => [Role], {nullable:true})
    roles?: Array<Role>;

    @Field(() => [Duty], {nullable:true})
    duties?: Array<Duty>;

    @Field(() => [Task], {nullable:true})
    tasks?: Array<Task>;

    @Field(() => SquadCount, {nullable:false})
    _count?: SquadCount;
}
