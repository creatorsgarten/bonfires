import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SquadCreateWithoutTasksInput } from './squad-create-without-tasks.input';
import { SquadCreateOrConnectWithoutTasksInput } from './squad-create-or-connect-without-tasks.input';
import { SquadUpsertWithoutTasksInput } from './squad-upsert-without-tasks.input';
import { SquadWhereUniqueInput } from './squad-where-unique.input';
import { SquadUpdateWithoutTasksInput } from './squad-update-without-tasks.input';

@InputType()
export class SquadUpdateOneWithoutTasksInput {

    @Field(() => SquadCreateWithoutTasksInput, {nullable:true})
    create?: SquadCreateWithoutTasksInput;

    @Field(() => SquadCreateOrConnectWithoutTasksInput, {nullable:true})
    connectOrCreate?: SquadCreateOrConnectWithoutTasksInput;

    @Field(() => SquadUpsertWithoutTasksInput, {nullable:true})
    upsert?: SquadUpsertWithoutTasksInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SquadWhereUniqueInput, {nullable:true})
    connect?: SquadWhereUniqueInput;

    @Field(() => SquadUpdateWithoutTasksInput, {nullable:true})
    update?: SquadUpdateWithoutTasksInput;
}
