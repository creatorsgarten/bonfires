import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SquadCreateManyInput } from './squad-create-many.input';

@ArgsType()
export class CreateManySquadArgs {

    @Field(() => [SquadCreateManyInput], {nullable:false})
    data!: Array<SquadCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
