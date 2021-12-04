import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SquadWhereUniqueInput } from './squad-where-unique.input';
import { SquadCreateWithoutTasksInput } from './squad-create-without-tasks.input';

@InputType()
export class SquadCreateOrConnectWithoutTasksInput {

    @Field(() => SquadWhereUniqueInput, {nullable:false})
    where!: SquadWhereUniqueInput;

    @Field(() => SquadCreateWithoutTasksInput, {nullable:false})
    create!: SquadCreateWithoutTasksInput;
}
